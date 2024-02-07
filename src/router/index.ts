import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/_Home.vue'
import FolderPage from '../views/_Folder.vue'
import CssUtilitiesPage from '../views/_CssUtilities.vue'

import AccordionPage from '../views/Accordion.vue'
import ActionSheetPage from '../views/ActionSheet.vue'
import AlertsPage from '../views/Alerts.vue'
import BadgePage from '../views/Badge.vue'
import BreadcrumbPage from '../views/Breadcrumb.vue'
import ButtonPage from '../views/Button.vue'
import CardPage from '../views/Card.vue'
import CheckboxPage from '../views/Checkbox.vue'
import ChipPage from '../views/Chip.vue'
import ContentPage from '../views/Content.vue'
import DatetimePage from '../views/Datetime.vue'
import FabPage from '../views/Fab.vue'
import GridPage from '../views/Grid.vue'
import InfinitescrollPage from '../views/Infinitescroll.vue'
import IconPage from '../views/Icon.vue'
import InputPage from '../views/Input.vue'
import ItemPage from '../views/Item.vue'
import ListPage from '../views/List.vue'
import MediaPage from '../views/Media.vue'
import MenuPage from '../views/Menu.vue'
import ModalPage from '../views/Modal.vue'
import NavPage from '../views/Nav.vue'
import PopoverPage from '../views/Popover.vue'
import ProgressPage from '../views/Progress.vue'
import RadioPage from '../views/Radio.vue'
import RangePage from '../views/Range.vue'
import RefresherPage from '../views/Refresher.vue'
import ReorderPage from '../views/Reorder.vue'
import RouterPage from '../views/Router.vue'
import SearchbarPage from '../views/Searchbar.vue'
import SegmentPage from '../views/Segment.vue'
import SelectPage from '../views/Select.vue'
import TabsBase from '../components/TabsBase.vue'
import TabsTest1Page from '../views/TabsTest1.vue'
import TabsTest2Page from '../views/TabsTest2.vue'
import TabsTest3Page from '../views/TabsTest3.vue'
import ToastPage from '../views/Toast.vue'
import TogglePage from '../views/Toggle.vue'
import ToolbarPage from '../views/Toolbar.vue'
import HeaderFooterPage from '../views/HeaderFooter.vue'
import BackButtonBase from '../views/BackButtonBase.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/folder',
    redirect: '/folder/1'
  },
  {
    path: '/folder/:id',
    component: FolderPage
  },
  {
    path: '/cssutilities',
    name: 'CssUtilities',
    component: CssUtilitiesPage
  },


  {
    path: '/accordion',
    name: 'Accordion',
    component: AccordionPage
  },
  {
    path: '/actionsheet',
    name: 'ActionSheet',
    component: ActionSheetPage
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: AlertsPage
  },
  {
    path: '/badge',
    name: 'Badge',
    component: BadgePage
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: BreadcrumbPage
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonPage
  },
  {
    path: '/card',
    name: 'Card',
    component: CardPage
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: CheckboxPage
  },
  {
    path: '/chip',
    name: 'Chip',
    component: ChipPage
  },
  {
    path: '/content',
    name: 'Content',
    component: ContentPage
  },
  {
    path: '/datetime',
    name: 'Datetime',
    component: DatetimePage
  },
  {
    path: '/fab',
    name: 'Fab',
    component: FabPage
  },
  {
    path: '/grid',
    name: 'Grid',
    component: GridPage
  },
  {
    path: '/infinitescroll',
    name: 'Infinitescroll',
    component: InfinitescrollPage
  },
  {
    path: '/icon',
    name: 'Icon',
    component: IconPage
  },
  {
    path: '/input',
    name: 'Input',
    component: InputPage
  },
  {
    path: '/item',
    name: 'Item',
    component: ItemPage
  },
  {
    path: '/list',
    name: 'List',
    component: ListPage
  },
  {
    path: '/media',
    name: 'Media',
    component: MediaPage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage
  },
  {
    path: '/modal',
    name: 'Modal',
    component: ModalPage
  },
  {
    path: '/nav',
    name: 'Nav',
    component: NavPage
  },
  {
    path: '/popover',
    name: 'Popover',
    component: PopoverPage
  },
  {
    path: '/progress',
    name: 'Progress',
    component: ProgressPage
  },
  {
    path: '/radio',
    name: 'Radio',
    component: RadioPage
  },
  {
    path: '/range',
    name: 'Range',
    component: RangePage
  },
  {
    path: '/refresher',
    name: 'Refresher',
    component: RefresherPage
  },
  {
    path: '/reorder',
    name: 'Reorder',
    component: ReorderPage
  },
  {
    path: '/router',
    name: 'Router',
    component: RouterPage
  },
  {
    path: '/searchbar',
    name: 'Searchbar',
    component: SearchbarPage
  },
  {
    path: '/segment',
    name: 'Segment',
    component: SegmentPage
  },
  {
    path: '/select',
    name: 'Select',
    component: SelectPage
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabsBase,
    redirect: '/tabstest1',
    children: [
      {
        path: '/tabstest1',
        name: 'TabsTest1',
        component: TabsTest1Page
      },
      {
        path: '/tabstest2',
        name: 'TabsTest2',
        component: TabsTest2Page
      },
      {
        path: '/tabstest3',
        name: 'TabsTest3',
        component: TabsTest3Page
      },
    ]
  },
  {
    path: '/toast',
    name: 'Toast',
    component: ToastPage
  },
  {
    path: '/toggle',
    name: 'Toggle',
    component: TogglePage
  },
  {
    path: '/toolbar',
    name: 'Toolbar',
    component: ToolbarPage
  },
  {
    path: '/headerfooter',
    name: 'HeaderFooter',
    component: HeaderFooterPage
  },
  {
    path: '/backbutton',
    name: 'BackButton',
    component: BackButtonBase,
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
