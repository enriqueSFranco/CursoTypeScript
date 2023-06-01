import ContentLoader from 'react-content-loader'

const Placeholder: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={200}
      viewBox='0 0 593 200'
      backgroundColor='#c2c2c2'
      foregroundColor='#ecebeb'
    >
      <rect x='447' y='4' rx='7' ry='7' width='141' height='15' />
      <rect x='2' y='3' rx='7' ry='7' width='426' height='15' />
      <rect x='2' y='37' rx='3' ry='3' width='302' height='15' />
    </ContentLoader>
  )
}

export default Placeholder
