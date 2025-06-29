import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { supabase } from '../supabaseClient';
import SaveMessageComponent from './SaveMessageComponent';
const theme = {
  background: "#1f2937",
  fontFamily: "Arial",
  headerBgColor: "#22c55e",
  headerFontColor: "#fff",
  botBubbleColor: "#4ade80",
  userBubbleColor: "#6b7280",
  userFontColor: "#fff",
};

const HireMeAssistant = () => {
  const [messages, setMessages] = useState([]);

  const handleEnd = ({ steps, values }) => {
    const userMessage = values[values.length - 1];
    console.log("User left a message:", userMessage);

    

    alert("Thanks for your message! Rajdeep will get back to you soon.");
  };

  const steps = [
    {
      id: '1',
      message: "Hey there! I'm Rajdeep's Assistant 🤖 What would you like to know?",
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'skills', label: 'Tech Stack', trigger: 'skills' },
        { value: 'project', label: 'Best Project?', trigger: 'project' },
        { value: 'resume', label: 'See Resume', trigger: 'resume' },
        { value: 'contact', label: 'Hire Him', trigger: 'contact' },
        { value: 'message', label: 'Leave a Message', trigger: 'messageInput' }
      ]
    },
    {
      id: 'skills',
      message: "He works with React, Solidity, Next.js, Tailwind, Clarity, Hardhat, Ethers, Wagmi & more.",
      trigger: 'options'
    },
    {
      id: 'project',
      component: (
        <div>
          <p style={{ color: "#000000" }}>Link to his best project:</p>
          <a
            href="stake-rich.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000000", textDecoration: "underline" }}
          >
            StakeRich
          </a>
        </div>
      ),
      trigger: 'options'
    },
    {
      id: 'resume',
      component: (
        <div>
          <p style={{ color: "#000000" }}>You can view his resume here:</p>
          <a 
            href="https://drive.google.com/file/d/14UfNyyohBQJVU6MQ2T5rOLXx_-lWUqKf/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000000", textDecoration: "underline" }}
          >
            Open Resume 📄
          </a>
        </div>
      ),
      trigger: 'options'
    },
    {
      id: 'contact',
      component: (
        <div>
          <p>📧 Email: <a href="mailto:rajdeepsingha384@gmail.com" style={{ color: "#22c55e" }}>rajdeepsingha384@gmail.com</a></p>
          <p>🐦 Twitter: <a href="https://twitter.com/singh61420" target="_blank" rel="noopener noreferrer" style={{ color: "#22c55e" }}>@singh61420</a></p>
        </div>
      ),
      trigger: 'options'
    },
    {
        id: 'contact',
        message: "What message would you like to leave for Rajdeep?",
        trigger: 'messageInput',
        color: "#000000",
      },
      {
        id: 'messageInput',
        color: "#000000",
        user: true,
        trigger: 'saveMessage',
      },
      {
        id: 'saveMessage',
        component: <SaveMessageComponent />,
        waitAction: true,
        asMessage: true,
        trigger: 'done'
      },
      {
        id: 'done',
        message: "Thanks! He’ll respond as soon as he can 🙌",
        trigger: 'options',
      },
      {
        id: 'error',
        message: "Oops, something went wrong. Please try again later 🙏",
        trigger: 'options',
      }
      
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle="Rajdeep's Assistant 💬"
          handleEnd={handleEnd}
        />
      </ThemeProvider>
    </div>
  );
};

export default HireMeAssistant;
