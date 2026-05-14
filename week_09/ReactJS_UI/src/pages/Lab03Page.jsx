import FiltersSidebar from '../components/FiltersSidebar'
import RecipeSection from '../components/RecipeSection'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import './Lab03Page.css'

const navItems = ['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us']

const typeFilters = [
  'Pan-fried',
  'Stir-fried',
  'Grilled',
  'Roasted',
  'Sauteed',
  'Baked',
  'Steamed',
  'Stewed',
]

const ratingRows = [5, 4, 3, 2]

const recipes = [
  {
    title: 'Cucumber salad, cherry tomatoes',
    time: '32 minutes',
    image: '/Lab_03/cucumber_salad_charry_tomatoes.png',
  },
  {
    title: 'Italian-style tomato salad',
    time: '32 minutes',
    image: '/Lab_03/italian_style_tomato_salad.png',
  },
  {
    title: 'Potato Salad',
    time: '32 minutes',
    image: '/Lab_03/Potato Salad.png',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image: '/Lab_03/salad_with_cabbage_and_shrimp.png',
  },
  {
    title: 'Five-color salad',
    time: '32 minutes',
    image: '/Lab_03/five_color_salad.png',
  },
  {
    title: 'Corn Salad',
    time: '32 minutes',
    image: '/Lab_03/corn_salad.png',
  },
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    image: '/Lab_03/Salad with cabbage.png',
  },
  {
    title: 'Lotus delight salad',
    time: '32 minutes',
    image: '/Lab_03/lotus_delight_salad.png',
  },
  {
    title: 'Avocado Salad',
    time: '32 minutes',
    image: '/Lab_03/avacador_salad.png',
  },
]

const footerColumns = [
  {
    title: 'Learn More',
    links: ['Our Cooks', 'See Our Features', 'FAQ'],
  },
  {
    title: 'Shop',
    links: ['Gift Subscription', 'Send Us Feedback'],
  },
  {
    title: 'Recipes',
    links: ['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Christmas'],
  },
]

function Lab03Page() {
  return (
    <div className="lab03-page">
      <SiteHeader navItems={navItems} />

      <main className="content-shell">
        <FiltersSidebar typeFilters={typeFilters} ratingRows={ratingRows} />
        <RecipeSection recipes={recipes} />
      </main>

      <SiteFooter footerColumns={footerColumns} />
    </div>
  )
}

export default Lab03Page
