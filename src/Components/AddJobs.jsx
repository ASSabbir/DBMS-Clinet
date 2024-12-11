import  { useState } from 'react';
import axios from 'axios';

const AddJobs = () => {
    const [formData, setFormData] = useState({
        category_name: '',
        job_title: '',
        description: '',
        key_responsibilities: '',
        skills_and_experience: '',
        expiration_date: '',
        location: '',
        hours_per_week: '',
        rate_per_hour: '',
        salary: '',
        skills: '',
        image_url: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your backend URL
            const response = await axios.post('http://localhost:5000/alljobs', formData);
            console.log('Job added successfully:', response.data);
            // Optionally, redirect or show success message
        } catch (error) {
            console.error('There was an error adding the job:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-primary mb-6">Add Job</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="category_name" className="block text-gray-700">Category Name</label>
                        <input
                            type="text"
                            id="category_name"
                            name="category_name"
                            value={formData.category_name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="job_title" className="block text-gray-700">Job Title</label>
                        <input
                            type="text"
                            id="job_title"
                            name="job_title"
                            value={formData.job_title}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="key_responsibilities" className="block text-gray-700">Key Responsibilities</label>
                        <textarea
                            id="key_responsibilities"
                            name="key_responsibilities"
                            value={formData.key_responsibilities}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="skills_and_experience" className="block text-gray-700">Skills and Experience</label>
                        <textarea
                            id="skills_and_experience"
                            name="skills_and_experience"
                            value={formData.skills_and_experience}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="expiration_date" className="block text-gray-700">Expiration Date</label>
                        <input
                            type="date"
                            id="expiration_date"
                            name="expiration_date"
                            value={formData.expiration_date}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="hours_per_week" className="block text-gray-700">Hours Per Week</label>
                        <input
                            type="number"
                            id="hours_per_week"
                            name="hours_per_week"
                            value={formData.hours_per_week}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="rate_per_hour" className="block text-gray-700">Rate Per Hour</label>
                        <input
                            type="number"
                            id="rate_per_hour"
                            name="rate_per_hour"
                            value={formData.rate_per_hour}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="salary" className="block text-gray-700">Salary</label>
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="skills" className="block text-gray-700">Skills</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="image_url" className="block text-gray-700">Image URL</label>
                        <input
                            type="url"
                            id="image_url"
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
                        >
                            Add Job
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;