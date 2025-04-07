import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ilxhplotsyyzwlrpgmyb.supabase.co";
const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlseGhwbG90c3l5endscnBnbXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MTE4MzMsImV4cCI6MjA1MjE4NzgzM30.7VctepPhMQVqYk2_RBOlKcuAnXGpNl33x1tR5TkA_Go";

const supabase = createClient( supabaseUrl, supabaseApiKey )

export const getUsers = async () =>{
  try {
    const { data, error } = await supabase.from("users").select();
    if(data) {
      return {
        data,
        message : "success",
        done : "fulfilled"
      }
    }
      if(error) throw error;
    
  } catch (error) {
    console.log(error)
  }
}
