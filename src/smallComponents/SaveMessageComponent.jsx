import { useEffect } from 'react';
import { supabase } from '../supabaseClient';

const SaveMessageComponent = ({ steps, triggerNextStep }) => {
  useEffect(() => {
    const saveMessage = async () => {
      const userMessage = steps.messageInput.value;

      const { error } = await supabase
        .from('messages')
        .insert([{ content: userMessage }]);

      if (error) {
        console.error("Error saving message:", error);
        triggerNextStep({ trigger: 'error' });
      } else {

        try {
          await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              to: "rajdeepsingha384@gmail.com",
              subject: "New Chatbot Message",
              text: `User said: ${userMessage}`
            })
          });
        } catch (err) {
          console.error("Email send failed:", err);
          // 
        }

        triggerNextStep();
      }
    };

    saveMessage();
  }, []);

  return <span>Saving your message...</span>;
};

export default SaveMessageComponent;