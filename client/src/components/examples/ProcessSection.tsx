import ProcessSection from '../ProcessSection'

export default function ProcessSectionExample() {
  return (
    <ProcessSection 
      onGetStarted={() => console.log('Get started from example')}
    />
  )
}