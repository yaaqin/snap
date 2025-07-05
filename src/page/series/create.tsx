import React, { useState } from "react";

export const CreateSeries: React.FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");

    return (
        <form className="max-w-7xl mx-auto px-6 py-8 text-purple-700">
            <h2 className="text-2xl font-semibold mb-8">Let’s create your Series.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Upload Artwork Section */}
                <div>
                    <div className="border border-purple-300 rounded-3xl p-6 bg-purple-50 shadow-md">
                        <div className="border border-purple-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                            <svg
                                className="w-8 h-8 mb-4 text-purple-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 15a4 4 0 014-4h14M10 11l2 2 4-4"
                                />
                                <path d="M16 7l-4 4-2-2" />
                            </svg>
                            <p className="font-semibold mb-1 text-purple-700">
                                Drop or upload your
                                <br />
                                artwork here.
                            </p>
                            <p className="text-xs text-purple-400 mb-6">
                                PNG, JPEG, GIF, WEBP - Max. 4 MB
                            </p>
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 text-white text-sm font-bold rounded-full px-6 py-3 shadow-[3px_4px_0_rgba(51,38,131,0.8)]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                                Add artwork
                            </button>
                        </div>
                    </div>
                    <p className="mt-3 text-xs text-purple-600 flex items-start gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 shrink-0 text-purple-400 mt-[2px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M12 12h.01M12 6h.01"
                            />
                        </svg>
                        <span>
                            <b>Recommended for optimal performance:</b><br />
                            500x500px, rounded shape, less than 200KB<br />
                            Animated pngs are not supported. Use of gif format recommended.
                        </span>
                    </p>
                </div>

                {/* Input Fields Section */}
                <div className="md:col-span-2 space-y-6">
                    {/* POAP title */}
                    <div>
                        <label
                            htmlFor="poap-title"
                            className="block text-sm font-semibold mb-1"
                        >
                            Brand Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            id="poap-title"
                            type="text"
                            maxLength={150}
                            placeholder="Give your Brand a unique title."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-purple-300 rounded-md py-2 px-3 text-purple-500 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                        <div className="text-right text-xs text-purple-500 mt-1">
                            {title.length}/150
                        </div>
                    </div>

                    {/* POAP description */}
                    <div>
                        <label
                            htmlFor="poap-description"
                            className="block text-sm font-semibold mb-1"
                        >
                            Brand description <span className="text-red-600">*</span>
                        </label>
                        <textarea
                            id="poap-description"
                            maxLength={1500}
                            placeholder="Brand Deskription."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border border-purple-300 rounded-md py-2 px-3 text-purple-500 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent min-h-[120px] resize vertical"
                        ></textarea>
                        <div className="text-right text-xs text-purple-500 mt-1">
                            {description.length}/1500
                        </div>
                    </div>

                    {/* Website */}
                    <div>
                        <label
                            htmlFor="website"
                            className="text-sm font-semibold mb-1 flex items-center gap-1"
                        >
                            Max Supply
                            <input
                                type="text"
                                maxLength={5}
                                placeholder="000"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-purple-300 rounded-md py-2 px-3 text-purple-500 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                            />
                        </label>
                    </div>
                </div>
            </div>

            {/* Footer with actions */}
            <div className="mt-8 border-t border-purple-200 pt-6 flex justify-between items-center">
                <button
                    type="button"
                    className="text-purple-600 font-semibold hover:underline focus:outline-none"
                    onClick={() => {
                        // Cancel action placeholder
                        alert("Cancel clicked");
                    }}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white font-bold rounded-full px-8 py-3 shadow-[3px_4px_0_rgba(51,38,131,0.8)] focus:outline-none"
                >
                    Create Series
                </button>
            </div>
        </form>
    );
};

