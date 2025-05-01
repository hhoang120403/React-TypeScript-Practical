// import Card from "./components/Card";
// import Container from "./components/Container";
// import IconButton from "./components/IconButton";

import { useRef } from "react";
// import List from "./components/List";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";
import Button from "./components/Button";

function App() {
  // const input = useRef<HTMLInputElement>(null);

  // function HeartIcon() {
  //   return <span>❤️</span>;
  // }

  // const users = [
  //   { id: "u1", name: "Max" },
  //   { id: "u2", name: "Manuel" },
  // ];

  // const hobbies = ["Sports", "Reading", "Cooking"];

  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    // const extractedData = data as { name: string; age: string };
    if (
      !data ||
      typeof data !== "object" ||
      !("name" in data) ||
      !("age" in data)
    ) {
      return;
    }

    console.log(data);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>

      {/* <Input label="Test" id="test" ref={input} /> */}

      {/* <Container as={Button} type="button">
        Click me
      </Container> */}

      {/* <Card
        title="My Card"
        actions={
          <button onClick={() => console.log("Button clicked!")}>
            Click Me!
          </button>
        }
      >
        <p>Some content</p>
      </Card> */}

      {/* <IconButton
        icon={HeartIcon}
        onClick={() => console.log("Button clicked!")}
      >
        Like
      </IconButton> */}

      {/* <section>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>

      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
        />
      </section> */}
    </main>
  );
}

export default App;
