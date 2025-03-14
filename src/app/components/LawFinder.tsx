'use client';

import { fetchPosts, Post } from '@/lib/api';
import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import PostCard from './PostCard';
import Pagination from './Pagination';

const POSTS_PER_PAGE = 10;

const LawFinder: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            try {
                const data = await fetchPosts();
                setPosts(data);
                setError('');
            } catch {
                setError('Failed to fetch Posts.');
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

    return (
        <div className="p-8 max-w-4xl mx-auto select-none">
            <div className="fixed top-0 left-0 right-0 bg-[#f9f9f9] z-10 p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-[#374151]">LawFinder</h1>
                <SearchInput value={searchTerm} onChange={setSearchTerm} />
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
            </div>

            <div className="pt-40">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    {currentPosts.length > 0 ? (
                        currentPosts.map((post) => <PostCard key={post.id} post={post} />)
                    ) : (
                        <p className="text-gray-500 text-center">No results found.</p>
                    )}
                </div>

                {filteredPosts.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
        </div>
    );
};

export default LawFinder;
