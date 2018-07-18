function do_request () {

}
export const getUserinfo = (store_id,staff_id) => {
  return do_request(uri,{
    baseURL : '11111',
    params : {
      store_id : store_id,
      staff_id : staff_id,
    }
  })
}

//添加员工信息
export const addUserinfo = (privilege_stores, staff_id, store_id) => {
  return do_request(uri,{
    baseURL : 2222222222,
    method: 'post',
    data: {
      privilege_stores: privilege_stores,
      staff_id: staff_id,
      store_id : store_id,
    }
  })
}
