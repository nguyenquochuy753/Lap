import MyButton1 from "./MyButton1";

const root = ReactDOM.createRoot(document.getElementById("root"));

function render({ second }) {
    root.render(
        <main>
            <MyButton1 />
            <MyButton1 text={second.text} disabled={second.disabled} />
        </main>
    );
}

render({
    second: {
        text: "Second Button",
        disabled: true,
    },
});