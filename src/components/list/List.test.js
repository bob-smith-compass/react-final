function List(props) {
    return(
        <div>{props.now}</div>
    )
}
const current = new Date()
describe ("Direct testing", () => {
    let result;

    beforeAll(() => {
        result = List({now: current.toISOString() })
    })
    it("returns a value", () => {
        expect(result).not.toBeNull();
    })
}) 