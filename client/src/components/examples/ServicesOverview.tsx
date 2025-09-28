import ServicesOverview from '../ServicesOverview'

export default function ServicesOverviewExample() {
  return (
    <ServicesOverview 
      onLearnMore={(serviceId) => console.log(`Learn more: ${serviceId}`)}
      onBookDemo={(serviceId) => console.log(`Book demo: ${serviceId}`)}
    />
  )
}