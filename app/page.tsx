"use client";
import { useState } from 'react';
import Search from './components/search/search'
import Section from './components/section/section'
import SectionHeader from './components/sectionHeader/sectionHeader'

type ActivityProps = 'Attended'|'Absent'
interface DataProps {
  name: string,
  email: string,
  image: string,
  activity: ActivityProps
}
export default function Home() {

  const [searchValue, setSearchValue] = useState('')

  const activityData: DataProps[] = [
    {name:'Dianne Russell', email: 'jane@hotmail.com', image:'picture.png', activity:'Attended'},
    {name:'Ronald Richards', email: 'jane@hotmail.com', image:'picture.png', activity:'Attended'},
    {name:'Arlene McCoy', email: 'jane@hotmail.com', image:'picture.png', activity:'Attended'},
    {name:'Kathryn Murphy', email: 'jane@hotmail.com', image:'picture.png', activity:'Attended'},
    {name:'Savannah Nguyen', email: 'jane@hotmail.com', image:'picture.png', activity:'Attended'},
    {name:'Albert Flores', email: 'jane@hotmail.com', image:'picture.png', activity:'Attended'},
    {name:'Jenny Wilson', email: 'jane@hotmail.com', image:'picture.png', activity:'Absent'},
    {name:'Wade Warren', email: 'jane@hotmail.com', image:'picture.png', activity:'Absent'},
    {name:'Bessie Cooper', email: 'jane@hotmail.com', image:'picture.png', activity:'Absent'},
    {name:'Ralph Edwards', email: 'jane@hotmail.com', image:'picture.png', activity:'Absent'}
  ]

  const sectionHeaderClick = (event:React.MouseEvent, message:string): void => {
    const element = document.getElementById(message+'sectionElement') as HTMLElement
    const iconElement = document.getElementById(message+'icon') as HTMLElement
    if(message === 'Attended'){
      if(element.classList.contains('hidden')){
        element.classList.remove('hidden')
        iconElement.classList.add('bi-chevron-down')
        iconElement.classList.remove('bi-chevron-right')
      }
      else{
        element.classList.add('hidden')
        iconElement.classList.remove('bi-chevron-down')
        iconElement.classList.add('bi-chevron-right')
      }
    }
    else if(message === 'Absent'){
      if(element.classList.contains('hidden')){
        element.classList.remove('hidden')
        iconElement.classList.add('bi-chevron-down')
        iconElement.classList.remove('bi-chevron-right')
      }
      else{
        element.classList.add('hidden')
        iconElement.classList.remove('bi-chevron-down')
        iconElement.classList.add('bi-chevron-right')
      }
    }
  }

  const initiateSearch = (event:React.ChangeEvent): void => {
    const element = event.target as HTMLInputElement
    setSearchValue(element.value)
  }

  return (
    <div className="bg-gray-800 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Search onChange={initiateSearch}/>
      <SectionHeader activity="Attended" onClick={sectionHeaderClick}/>
      <div id="AttendedsectionElement" className="bg-gray-800 items-center justify-items-center w-3/4 md:w-1/2 font-[family-name:var(--font-geist-sans)]">
      {
        activityData.filter((props) => props.activity==='Attended' && (searchValue.length === 0 || (searchValue.length > 0 && props.name.toUpperCase().indexOf(searchValue.toUpperCase()) >= 0))).map((data, key) => {
          return(
            <Section key={key} name={data.name} image={data.image} />
          )
        })
      }
      </div>
      
      <SectionHeader activity="Absent" onClick={sectionHeaderClick}/>
      <div id={"AbsentsectionElement"} className="bg-gray-800 items-center justify-items-center w-3/4 md:w-1/2 font-[family-name:var(--font-geist-sans)]">
      {
        activityData.filter((props) => props.activity==='Absent' && (searchValue.length === 0 || (searchValue.length > 0 && props.name.toUpperCase().indexOf(searchValue.toUpperCase()) >= 0))).map((data, key) => {
          return(
            <Section key={key} name={data.name} image={data.image}/>
          )
        })
      }
      </div>
    </div>
  )
}
