import FinalCTA from '../FinalCTA'

export default function FinalCTAExample() {
  return (
    <FinalCTA 
      onBookCall={() => console.log('Book call from final CTA')}
      onRequestDemo={() => console.log('Request demo from final CTA')}
    />
  )
}