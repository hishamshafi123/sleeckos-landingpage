import Navigation from '../Navigation'

export default function NavigationExample() {
  return (
    <Navigation 
      onBookCall={() => console.log('Book call from navigation')}
    />
  )
}