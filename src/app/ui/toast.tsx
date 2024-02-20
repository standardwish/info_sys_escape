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
          {isAnswer ? "정답! 다음 단계로 이동해주세요." : "오답"}
        </Toast.Title>
        <Toast.Description asChild>
          나이스 투 미트 유
          {/* {isAnswer ? "다음 단계로 이동해주세요." : "조금 더 고민해주세요"} */}
        </Toast.Description>
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
