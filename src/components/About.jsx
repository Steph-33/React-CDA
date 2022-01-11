import Card from "./Card";

const About = () => {
    const persons = [
        {name : 'Steph', age : 46}, 
        {name : 'Beaura', age : 33}, 
        {name : 'JB', age : 29}, 
    ]

    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
        {persons.map((person, index) => {
            return <Card key={index} data={{title:person.name, text:person.age}}/>
        })}
        </div>
    )
}

export default About;