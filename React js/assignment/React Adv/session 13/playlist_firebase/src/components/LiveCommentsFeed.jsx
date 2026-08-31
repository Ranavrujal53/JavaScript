import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../Firebase/db";

function LiveCommentsFeed() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);

  // =========================================
  // LIVE COMMENTS
  // =========================================
  useEffect(() => {
    const commentsRef = collection(db, "comments");

    const commentsQuery = query(
      commentsRef,
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      commentsQuery,
      (snapshot) => {
        const commentsData = snapshot.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        setComments(commentsData);
      },
      (error) => {
        console.log("Error fetching comments:", error);
      }
    );

    // Cleanup listener
    return () => {
      unsubscribe();
    };
  }, []);

  // =========================================
  // ADD COMMENT
  // =========================================
  const handleAddComment = async () => {
    if (!user.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!message.trim()) {
      alert("Please enter your comment");
      return;
    }

    try {
      await addDoc(collection(db, "comments"), {
        user: user.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      });

      setMessage("");

      alert("Comment added successfully!");
    } catch (error) {
      console.log("Error adding comment:", error);
      alert("Error adding comment");
    }
  };

  return (
    <div className="max-w-3xl px-6 py-8 mx-auto mt-10 shadow-xl bg-slate-50 rounded-2xl text-slate-800">

      {/* =====================================
          TITLE
      ===================================== */}

      <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-700">
        Live Comments Feed
      </h2>

      {/* =====================================
          ADD COMMENT FORM
      ===================================== */}

      <div className="p-5 mb-8 bg-white border shadow-sm rounded-xl border-slate-200">

        <h3 className="mb-4 text-xl font-semibold text-slate-600">
          Add Comment
        </h3>

        {/* USER NAME */}

        <input
          type="text"
          placeholder="Enter your name..."
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full px-4 py-3 mb-4 border rounded-lg outline-none bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-slate-700"
        />

        {/* COMMENT */}

        <textarea
          placeholder="Write your comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="w-full px-4 py-3 mb-4 border rounded-lg outline-none resize-none bg-slate-50 border-slate-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-slate-700"
        />

        {/* BUTTON */}

        <button
          onClick={handleAddComment}
          className="px-6 py-3 font-medium text-white transition-all bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
        >
          Add Comment
        </button>

      </div>

      {/* =====================================
          LIVE COMMENTS
      ===================================== */}

      <div>

        <h3 className="mb-4 text-xl font-semibold text-slate-600">
          Latest Comments
        </h3>

        {comments.length === 0 ? (

          <p className="py-8 font-medium text-center text-slate-400 bg-white border border-dashed rounded-xl border-slate-300">
            No comments found. Add the first comment!
          </p>

        ) : (

          <div className="space-y-3">

            {comments.map((comment) => (

              <div
                key={comment.id}
                className="p-5 transition-all duration-200 bg-white border border-transparent shadow-sm rounded-xl hover:border-slate-200 hover:shadow-md"
              >

                <div className="flex items-center justify-between mb-2">

                  <h4 className="text-lg font-bold text-slate-700">
                    {comment.user}
                  </h4>

                  <span className="text-xs font-mono text-slate-400">
                    Live
                  </span>

                </div>

                <p className="text-slate-600">
                  {comment.message}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default LiveCommentsFeed;