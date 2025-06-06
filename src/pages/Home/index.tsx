import { Button } from '@mantine/core'
import { useCreateDemo, useDemoList } from '../../datas/demo/hooks'
import Form from '../../components/Form'

export default function Home() {
  const demoList = useDemoList({ limit: 10 })
  const createDemo = useCreateDemo()

  function handleCreateDemo() {
    createDemo.mutate({
      name: 'test',
      id: 0
    })
  }

  return (
    <div>
      <div className='flex h-screen flex-col items-center justify-center'>
        <h1 className='mb-4 text-3xl font-bold'>Hello World</h1>
        <Button onClick={handleCreateDemo} loading={createDemo.isPending}>
          Click me
        </Button>

        {demoList.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>{demoList.data?.map((item) => <div key={item.id}>{item.name}</div>)}</div>
        )}

        <Form />
      </div>
    </div>
  )
}
