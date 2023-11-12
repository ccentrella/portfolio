COPY (SELECT
        posts.id AS "postId.int32()",
        posts.user_id AS "userId.int32()",
        action_text_rich_texts.body AS "content.string()",
        posts.title AS "title.string()",
        posts.category AS "category.string()",
        posts.description AS "description.string()",
        posts.tags AS "tags.array()",
        posts.slug AS "slug.string()",
        posts.created_at AS "createdAt.timestamp()",
        posts.updated_at AS "updatedAt.timestamp()"
    FROM posts
    JOIN action_text_rich_texts ON action_text_rich_texts.record_id = posts.id
) TO '/Users/christophercentrella/Downloads/posts.tsv' WITH (FORMAT CSV, HEADER TRUE, DELIMITER E'\t');