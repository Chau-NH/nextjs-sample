export default function HelloWorld (props) {
    const { data } = props;
    return (
        <>
         {data?.name}
        </>
    );
}

// Fetch data from an API endpoint
export const getServerSideProps = async() => {
    const res = await fetch(`http://localhost:3000/api/hello`);
    return {
      props: {
        data: await res.json()
      }
    }
}
