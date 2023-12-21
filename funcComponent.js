function Block1 (props) {
    // Logic

    // JSX
    return <div>React course 2023</div>
};

const Block2 = () => {
    return <div>Arrow function Component</div>
}

ReactDom.render(<Block1 />, document.getElementById('root'));
ReactDom.render(<Block2 />, document.getElementById('root'));