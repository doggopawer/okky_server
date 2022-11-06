import sequelize from "./database.js";
import {DataTypes} from "sequelize";


export const member = sequelize.define('member', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nick: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    marketing_yn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activity_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    admin_yn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    profile_url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
export const bigMenu = sequelize.define('big_menu', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

});

export const smallMenu = sequelize.define('small_menu', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

});
export const writing = sequelize.define('writing', {
    title: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(10000),
        allowNull: false,
    },
    views: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updated_yn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});
export const bigComment = sequelize.define('big_comment', {
    description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    adopt_yn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    updated_yn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});
export const smallComment = sequelize.define('small_comment', {
    description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    updated_yn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});
export const writingLike = sequelize.define('writing_like', {
    like_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
export const bigCommentLike = sequelize.define('big_comment_like', {
    like_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
export const smallCommentLike = sequelize.define('small_comment_like', {
    like_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
export const memberTag = sequelize.define('member_tag', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
export const writingTag = sequelize.define('writing_tag', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
export const scrap = sequelize.define('scrap', {

});

member.hasMany(bigMenu);
member.hasMany(smallMenu);
member.hasMany(writing);
member.hasMany(bigComment);
member.hasMany(smallComment);
member.hasMany(writingLike);
member.hasMany(bigCommentLike);
member.hasMany(smallCommentLike);
member.hasMany(memberTag);
member.hasMany(scrap);

bigMenu.hasMany(smallMenu);
smallMenu.hasMany(writing);

writing.hasMany(bigComment);
writing.hasMany(writingLike);
writing.hasMany(writingTag);
writing.hasMany(scrap);

bigComment.hasMany(smallComment);
bigComment.hasMany(bigCommentLike);

smallComment.hasMany(smallCommentLike);





