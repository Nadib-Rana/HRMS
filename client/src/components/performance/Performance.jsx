import React, { useState } from 'react';

const Performance = () => {
  const [reviews, setReviews] = useState([
    { id: '1', employeeId: '1', reviewer: 'Jane Smith', rating: 4, feedback: 'Great work!' },
    { id: '2', employeeId: '1', reviewer: 'Bob Johnson', rating: 3, feedback: 'Needs improvement in communication.' },
  ]);
  const [employeeId, setEmployeeId] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Mock API call to submit review
    const newReview = {
      id: String(reviews.length + 1),
      employeeId,
      reviewer: 'Admin',
      rating: Number(rating),
      feedback,
    };
    setReviews([...reviews, newReview]);
    setEmployeeId('');
    setRating('');
    setFeedback('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Performance Tracking</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Submit Performance Review</h2>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Submit Review
          </button>
        </form>
      </div>
      <h2 className="text-lg font-semibold mb-4">Performance Reviews</h2>
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">ID</th>
            <th className="p-2">Employee ID</th>
            <th className="p-2">Reviewer</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td className="p-2">{review.id}</td>
              <td className="p-2">{review.employeeId}</td>
              <td className="p-2">{review.reviewer}</td>
              <td className="p-2">{review.rating}</td>
              <td className="p-2">{review.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Performance;