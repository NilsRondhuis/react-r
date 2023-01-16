const getTasks = state => state.tasks;
const getStatusFilter = state => state.filters.status;

const selectors = { getTasks, getStatusFilter };

export default selectors;
