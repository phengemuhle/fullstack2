
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', (student) => {
        students.increments('id')
        students.string('name')
        student.string('previous_occupation')
        student.decimal('hometown_lat', null)
        student.decimal('hometown_long', null)
        student.string('fave_animal')
        student.string('useless_superpower')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('students')
};
