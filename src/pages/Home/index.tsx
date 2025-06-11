import { useDemoList } from '../../datas/demo/hooks'
import Form from '../../components/Form'
import { Card } from '@mantine/core'

export default function Home() {
  const demoList = useDemoList({ limit: 10 })

  return (
    <div>
      <div className='mt-20 flex flex-col items-center justify-center'>
        <h1 className='mb-4 text-3xl font-bold'>Hello World</h1>

        {demoList.isLoading ? (
          <div>Loading...</div>
        ) : (
          <Card>{demoList.data?.map((item) => <div key={item.id}>{item.name}</div>)}</Card>
        )}

        <Form />
      </div>
    </div>
  )
}
