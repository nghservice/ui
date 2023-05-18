import { GraphQLClient, gql } from 'graphql-request';

async function getExercises() {
  const graphClient = new GraphQLClient(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhsyg4d42aa601t5bcfwd48h/master'
  );

  const { exercises } = await graphClient.request<{ exercises: any[] }>(
    gql`
      {
        exercises(locales: [ru]) {
          title
          text
          tasks
        }
      }
    `
  );

  return exercises;
}

export default async function Home() {
  const data = await getExercises();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {data.map((item, index) => {
          return <section key={index + item.title}><h2>{item.title}</h2>
            <p>{item.text}</p>
            <div>{item.tasks.map((task: any, index: number) => <p key={index + task[0]}>{task}</p>)}</div></section>
        })}
      </div>
    </main>
  )
}
