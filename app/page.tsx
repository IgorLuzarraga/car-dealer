import SearchBar from '@/components/search/Searchbar'
import Hero from '../components/hero/Hero'
import { AppSections } from '@/types'
import CustomFilter from '../components/custom/CustomFilter'
// import { CustomFilter } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import { fetchCars } from '@/services'
import CarCard from '@/components/car/carCard/CarCard'
import ShowMore from '@/components/ShowMore'
import { CarsType } from '@/types'
import ErrorFetchingData from '@/components/home/ErrorFetchingData'
import Headings from '@/components/home/Headings'

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id={AppSections.CarCatalogue}>

        <Headings />

        <div className='mt-12 w-full flex-between flex-wrap gap-5'>
          <SearchBar />

          <div className='flex justify-start flex-wrap items-center gap-2'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty
          ? (
            <section>
              <div className=' w-full pt-14 grid grid-cols-1 
              md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 '
              >
                {showCars(allCars)}
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : <ErrorFetchingData message={allCars?.message} />
        }

      </div>

    </main>
  )
}

const showCars = (allCars: CarsType) =>
  allCars?.map((car, index) =>
    <CarCard key={`${car}-${index}`} car={car} />
  )
