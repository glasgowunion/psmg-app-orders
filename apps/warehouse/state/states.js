// States : provides simple states for use by the warehouse
// 'icebox' - orders that are saved until a later date
// 'ready' - orders that are ready to be delt with , this is usually the
// first stage of the fufilmemnt process
// 'pack' orders get weighed and measured ready for shipping
// 'ship' labels get generated
// 'accounts' orders get sent to sage
// 'archive' when an order is processed it is archived
const States = ['icebox', 'ready', 'pack', 'ship', 'accounts', 'archive'];

export { States };
