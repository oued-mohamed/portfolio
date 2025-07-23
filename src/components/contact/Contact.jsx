import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config"; // Ensure db is properly initialized


export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const snapshot = await getDocs(collection(db, "medcoll"));
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      await addDoc(collection(db, "medcoll"), {
        email,
        message: message,
        createAt: new Date(),
      });
      alert('Message sent successfully!'); // Temporary feedback for user
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to submit. Please try again.");
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, [])
  const fetchUsers = async () => {
    const Data = await getUsers()
    setUsers(Data)
  }


  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-xl font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-xl font-medium text-white">
              Message
            </label>
            <textarea
              rows="6"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment ..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
