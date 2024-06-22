import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
      category: '',
      description: '',
      targetAudience: '',
      problemStatement: '',
      roadmapMilestones: '',
      fundingGoals: '',
      amountRaised: '',
      solution: '',
      partnerships: '',
      securityCompliance: '',
      testimonials: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      // Perform form submission logic here
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Category</label>
          <input 
            type="text" 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <input 
            type="text" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Target Audience</label>
          <input 
            type="text" 
            name="targetAudience" 
            value={formData.targetAudience} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Problem Statement</label>
          <textarea 
            name="problemStatement" 
            value={formData.problemStatement} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Roadmap & Milestones</label>
          <textarea 
            name="roadmapMilestones" 
            value={formData.roadmapMilestones} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Funding Goals</label>
          <input 
            type="text" 
            name="fundingGoals" 
            value={formData.fundingGoals} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Amount Raised</label>
          <input 
            type="text" 
            name="amountRaised" 
            value={formData.amountRaised} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Solution</label>
          <textarea 
            name="solution" 
            value={formData.solution} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Partnerships & Collaborations</label>
          <textarea 
            name="partnerships" 
            value={formData.partnerships} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Security & Compliance</label>
          <textarea 
            name="securityCompliance" 
            value={formData.securityCompliance} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">User Testimonials</label>
          <textarea 
            name="testimonials" 
            value={formData.testimonials} 
            onChange={handleChange} 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  }
  
  export default Form;
  