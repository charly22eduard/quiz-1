//Definicion del modelo de Quiz

module.exports = function(sequelize, DataTypes){
	return sequelize.define('Quiz',
	{ pregunta: { type: DataTypes.STRING, validate: {notEmpty:{msg:"--> Falta Pregunta"}}},
		respuesta: { type: DataTypes.STRING, validate: {notEmpty:{msg:"--> Falta Respuesta"}}},
		tema:{ type: DataTypes.STRING, validate: {notEmpty:{msg:"--> Seleccione un tema."}, isIn:{
			args:[['ocio', 'tecnología', 'humanidades','otro',  'ciencia']],
			msg:"Seleccione un tema."
		}}}
	});
}