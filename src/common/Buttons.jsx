const Buttons = ({ content }) => {
    return (
        <button className='btn'
            style={{
                backgroundColor: "#7d3cf3",
                color: "white",
                padding: "15px 30px",
                marginBlock: "30px",
                borderRadius: "30px",
                textAlign: "center"
            }}
        >
            {content}
        </button>
    )
}

export default Buttons