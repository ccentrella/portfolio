COPY (SELECT
        id AS "postId.int32()",
        user_id AS "userId.int32()",
        content AS "content.string()",
        title AS "title.string()",
        category AS "category.string()",
        'description' AS "description.string()",
        tags AS "tags.array()",
        slug AS "slug.string()",
        created_at AS "createdAt.timestamp()",
        updated_at AS "updatedAt.timestamp()"
    FROM posts
) TO '/Users/christophercentrella/Downloads/posts.tsv' WITH (FORMAT CSV, HEADER TRUE, DELIMITER E'\t');