import { useDemoList } from '../../datas/demo/hooks'

export default function About() {
  const demoList = useDemoList({ limit: 10 })

  return (
    <div>
      <div className='mt-20 flex flex-col items-center justify-center'>
        <h1 className='mb-4 text-3xl font-bold'>About</h1>

        {demoList.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>{demoList.data?.map((item) => <div key={item.id}>{item.name}</div>)}</div>
        )}
      </div>
    </div>
  )
}
