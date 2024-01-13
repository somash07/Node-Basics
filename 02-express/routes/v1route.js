const express=require('express')

// const {people}=require('../data')

const {
    getPeople,postPeople,updatePeople,deletePeople,postPostman
}= require('../controller/v1routecontroller')

const router=express.Router()


router.get('/', getPeople)

router.post('/', postPeople)

router.post('/postman', postPostman)

//edit or delete conventionally route params are used
router.put('/:id', updatePeople)//put
router.delete('/:id', deletePeople)//delete

// router.router('/').get(getPeople).post(postPeople)
// router.route('/postman').post(postPostman)
// router.route(':/').put(updatePeople)
// router.route('"/id').delete(deletePeople)

module.exports = router
