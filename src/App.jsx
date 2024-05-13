import { useEffect } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          await fetchUserInfo(user.uid);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    console.log("isLoading:", isLoading);
    return <div className="loading">Loading...</div>;
  }

  console.log("Detail:", Detail);
  console.log("Chat:", Chat);

  try {
    return (
      <div className="container">
        {currentUser ? (
          <>
            <List />
            {chatId && <Chat />}
            {chatId && <Detail />}
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    );
  } catch (error) {
    console.error("Error rendering Chat and Detail:", error);
    return null; // Return null or an error component
  }
};

export default App;
