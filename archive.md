---
layout: main
title: "Archive"
permalink: /archive/
---

<div class="archive-wrapper">
    <div class="archive">
        <div class="archive-header">
            <div class="archive-col-date"></div>
            <div class="archive-col-ru">Russian</div>
            <div class="archive-col-en">English</div>
        </div>
        
        {% assign grouped_posts = site.posts | group_by: "date" | sort: "name" | reverse %}
        {% for group in grouped_posts %}
            {% assign posts_in_group = group.items | sort: "locale" %}
            {% assign ru_post = nil %}
            {% assign en_post = nil %}
            
            {% for post in posts_in_group %}
                {% if post.locale == "en" %}
                    {% assign en_post = post %}
                {% else %}
                    {% assign ru_post = post %}
                {% endif %}
            {% endfor %}
            
            <div class="archive-row">
                <div class="archive-col-date">
                    <div class="archive-date">
                        {{ group.name | date: "%Y, %b %d" }}
                    </div>
                    {% if ru_post %}
                        <div class="archive-read-time">
                            {% if ru_post.content contains "video-container" %}
                                <span class="icon-play"></span>
                            {% else %}
                                {% assign words = ru_post.content | number_of_words %}
                                {% assign minutes = words | divided_by: 200.0 | ceil %}
                                {% if minutes < 1 %}1{% else %}{{ minutes }}{% endif %} min read
                            {% endif %}
                        </div>
                        {% if ru_post.last_update %}
                            <div class="archive-update">
                                Updated: {{ ru_post.last_update | date: "%Y, %b %d" }}
                            </div>
                        {% endif %}
                    {% elsif en_post %}
                        <div class="archive-read-time">
                            {% if en_post.content contains "video-container" %}
                                <span class="icon-play"></span>
                            {% else %}
                                {% assign words = en_post.content | number_of_words %}
                                {% assign minutes = words | divided_by: 200.0 | ceil %}
                                {% if minutes < 1 %}1{% else %}{{ minutes }}{% endif %} min read
                            {% endif %}
                        </div>
                        {% if en_post.last_update %}
                            <div class="archive-update">
                                Updated: {{ en_post.last_update | date: "%Y, %b %d" }}
                            </div>
                        {% endif %}
                    {% endif %}
                </div>
                
                <div class="archive-col-ru">
                    {% if ru_post %}
                        <a href="{{ ru_post.url | relative_url }}">{{ ru_post.title }}</a>
                    {% else %}
                        <span class="no-post">—</span>
                    {% endif %}
                </div>
                
                <div class="archive-col-en">
                    {% if en_post %}
                        <a href="{{ en_post.url | relative_url }}">{{ en_post.title }}</a>
                    {% else %}
                        <span class="no-post">—</span>
                    {% endif %}
                </div>
            </div>
        {% endfor %}
    </div>
</div>

<style>
.archive-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 15px 0;
    border-bottom: 2px solid #eee;
    font-weight: bold;
    color: #666;
    margin-bottom: 20px;
}

.archive-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 15px 0;
    border-bottom: 1px solid #f5f5f5;
    align-items: start;
}

.archive-row:hover {
    background-color: #fafafa;
}

.archive-col-date {
    font-size: 14px;
    color: #999;
}

.archive-date {
    font-weight: 500;
    color: #666;
    margin-bottom: 5px;
}

.archive-read-time {
    font-size: 12px;
    color: #888;
    margin-bottom: 3px;
}

.archive-update {
    font-size: 11px;
    color: #aaa;
    font-style: italic;
}

.archive-col-ru a,
.archive-col-en a {
    color: #333;
    text-decoration: none;
    line-height: 1.4;
}

.archive-col-ru a:hover,
.archive-col-en a:hover {
    color: #000;
    text-decoration: underline;
}

.no-post {
    color: #ccc;
    font-style: italic;
}

.archive-wrapper {
    margin-top: 30px;
}

.icon-play:before {
    content: "\e912";
    font-size: 16px;
}

.icon-play {
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
}

@media only screen and (max-width: 768px) {
    .archive-header,
    .archive-row {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    
    .archive-header {
        display: none;
    }
    
    .archive-row {
        border: 1px solid #eee;
        border-radius: 5px;
        padding: 15px;
        margin-bottom: 15px;
    }
    
    .archive-col-date {
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    
    .archive-col-ru,
    .archive-col-en {
        padding: 5px 0;
    }
    
    .archive-col-ru::before {
        content: "Russian: ";
        font-weight: bold;
        color: #666;
    }
    
    .archive-col-en::before {
        content: "English: ";
        font-weight: bold;
        color: #666;
    }
}
</style>