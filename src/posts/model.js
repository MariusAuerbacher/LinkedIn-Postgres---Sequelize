import { DataTypes } from "sequelize"
import sequelize from "../db.js"



const PostsModel = sequelize.define(
  "post",
  {
    postId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, 
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(150),
      allowNull: true,
    }
  
   
  }
 
)



export default PostsModel