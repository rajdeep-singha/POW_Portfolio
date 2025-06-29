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
        triggerNextStep();
      }
    };

    saveMessage();
  }, []);

  return <span>Saving your message...</span>;
};

export default SaveMessageComponent;