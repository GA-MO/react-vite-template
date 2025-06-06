import { Button } from '@mantine/core'
import { useCreateDemo, useDemoList } from '../../datas/demo/hooks'

export default function About() {
  const demoList = useDemoList({ limit: 10 })
  const createDemo = useCreateDemo()

  return (
    <div>
      <div className='flex h-screen flex-col items-center justify-center'>
        <h1 className='mb-4 text-3xl font-bold'>About</h1>
        <Button
          onClick={() =>
            createDemo.mutate({
              name: 'test',
              id: 0
            })
          }
          loading={createDemo.isPending}
        >
          Click me
        </Button>

        {demoList.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>{demoList.data?.map((item) => <div key={item.id}>{item.name}</div>)}</div>
        )}
      </div>
    </div>
  )
}
