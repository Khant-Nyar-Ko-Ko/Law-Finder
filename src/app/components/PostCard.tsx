import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Post {
    title: string;
    body: string;
}

const PostCard = ({ post }: { post: Post }) => {
    const [showSeeMore, setShowSeeMore] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (textRef.current) {
            const isOverflowing = textRef.current.scrollHeight > textRef.current.clientHeight;
            setShowSeeMore(isOverflowing);
        }
    }, [post.body]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='p-4 mt-4 bg-[#78B3CE] border border-[#78B3CE] rounded-xl shadow flex flex-col justify-between'
            >
                <div className="min-h-[4rem]">
                    <h2 className="sm:text-md text-lg font-semibold mb-1 text-[#FBF8EF]">{post.title}</h2>
                </div>
                <p
                    ref={textRef}
                    className="text-sm md:text-md text-[#FBF8EF] line-clamp-3"
                >
                    {post.body}
                </p>


                <div className="min-h-[2.5rem]">
                    {showSeeMore && (
                        <button
                            onClick={() => setShowPopup(true)} // Show popup on click
                            className="text-[#FBF8EF] font-semibold mt-2 self-start hover:underline"
                        >
                            See more
                        </button>
                    )}
                </div>
            </motion.div>

            {/* Full-Page Popup */}
            {showPopup && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#78B3CE] rounded-xl shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
                    >
                        {/* Popup Title */}
                        <h2 className="text-2xl font-semibold mb-4 text-[#FBF8EF]">{post.title}</h2>

                        {/* Popup Body */}
                        <p className="text-[#FBF8EF]">{post.body}</p>

                        {/* Close Button */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 text-[#FBF8EF] font-semibold hover:underline"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default PostCard;