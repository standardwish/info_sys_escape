"use client";
import * as Toast from "@radix-ui/react-toast";
import "./toast.css";

const MyToast = ({
  open,
  setOpen,
  isAnswer,
}: {
  open: boolean;
  setOpen: any;
  isAnswer: boolean;
}) => {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">
          {isAnswer ? "열심히 찾다보니 목이 마르네..." : "오답"}
        </Toast.Title>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="Button small green">닫기</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default MyToast;
