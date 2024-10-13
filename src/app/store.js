import { configureStore } from '@reduxjs/toolkit'
import workOrder from '../features/workOrder'

export default configureStore({
  reducer: {
    WorkOrder: workOrder
  },
})