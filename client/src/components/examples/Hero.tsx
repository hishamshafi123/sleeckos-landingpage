import Hero from '../Hero'

export default function HeroExample() {
  return (
    <Hero 
      onBookCall={() => console.log('Book call from example')}
      onWatchDemo={() => console.log('Watch demo from example')}
    />
  )
}