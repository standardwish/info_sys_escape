import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./dialog.css";

const MyDialog = ({
  val,
  onChange,
  onSubmit,
}: {
  val: string;
  onChange: any;
  onSubmit: any;
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="DialogButton black">LOGIN</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Please sign in</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Nice To Meet You.
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="id">
            id:
          </label>
          <input
            className="Input"
            id="id"
            defaultValue=""
            value={val}
            onChange={onChange}
          />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <button className="SubmitButton green" onClick={onSubmit}>
            Submit
          </button>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default MyDialog;
