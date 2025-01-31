---
layout: default
title: People
---

<!-- we only want files from the collection '_people' that are named index -->
{% assign directors = site.people | where: "role", 0  | where: "slug", "index" | sort: "name" %}
{% assign coordinators = site.people | where: "role", 1  | where: "slug", "index" | sort: "name" %}
{% assign administrators = site.people | where: "role", 2  | where: "slug", "index" | sort: "name" %}
{% assign researchers = site.people | where: "role", 3  | where: "slug", "index" | sort: "name" %}
{% assign post_docs = site.people | where: "role", 6  | where: "slug", "index" | sort: "name" %}
{% assign phds = site.people | where: "role", 4  | where: "slug", "index" | sort: "name" %}
{% assign past_members = site.people | where: "role", 5  | where: "slug", "index" | sort: "name" %}

## Direction

{% for person in directors %}
{% assign a_url = person.url | split: "/" %}
{% if a_url.size == 4 %} <!-- path to index.md should not be longer than domain/people/<person>/index.md -->
<div class="person-grid">
    <div>
        <img class="profileImage"
            onerror="this.src='/assets/images/avatar.png'"
            src="{{person.url | remove: 'index.html' }}/{{person.profileImage}}">
    </div>
    <div>
        <h4><a href="{{person.url}}">{{person.name}}</a></h4>
        <p>{{person.title}}</p>
        <p>{{person.content | strip_html | truncate: 100 }}</p>
    </div>
</div>
<div class="h-line"></div>
{% endif %}
{% endfor %}


## Coordinating Director

{% for person in coordinators %}
{% assign a_url = person.url | split: "/" %}
{% if a_url.size == 4 %}
<div class="person-grid">
    <div>
        <img class="profileImage"
            onerror="this.src='/assets/images/avatar.png'"
            src="{{person.url | remove: 'index.html' }}/{{person.profileImage}}">
    </div>
    <div>
        <h4><a href="{{person.url}}">{{person.name}}</a></h4>
        <p>{{person.title}}</p>
        <p>{{person.content | strip_html | truncate: 100 }}</p>
    </div>
</div>
<div class="h-line"></div>
{% endif %}
{% endfor %}


## Administrators

{% for person in administrators %}
{% assign a_url = person.url | split: "/" %}
{% if a_url.size == 4 %}
<div class="person-grid">
    <div>
        <img class="profileImage"
            onerror="this.src='/assets/images/avatar.png'"
            src="{{person.url | remove: 'index.html' }}/{{person.profileImage}}">
    </div>
    <div>
        <h4><a href="{{person.url}}">{{person.name}}</a></h4>
        <p>{{person.title}}</p>
        <p>{{person.content | strip_html | truncate: 100 }}</p>
    </div>
</div>
<div class="h-line"></div>
{% endif %}
{% endfor %}


## Researchers

{% for person in researchers %}
{% assign a_url = person.url | split: "/" %}
{% if a_url.size == 4 %}
<div class="person-grid">
    <div>
        <img class="profileImage"
            onerror="this.src='/assets/images/avatar.png'"
            src="{{person.url | remove: 'index.html' }}/{{person.profileImage}}">
    </div>
    <div>
        <h4><a href="{{person.url}}">{{person.name}}</a></h4>
        <p>{{person.title}}</p>
        <p>{{person.content | strip_html | truncate: 100 }}</p>
    </div>
</div>
<div class="h-line"></div>
{% endif %}
{% endfor %}


## Post Doctoral Researchers

{% for person in post_docs %}
{% assign a_url = person.url | split: "/" %}
{% if a_url.size == 4 %}
<div class="person-grid">
    <div>
        <img class="profileImage"
            onerror="this.src='/assets/images/avatar.png'"
            src="{{person.url | remove: 'index.html' }}/{{person.profileImage}}">
    </div>
    <div>
        <h4><a href="{{person.url}}">{{person.name}}</a></h4>
        <p>{{person.title}}</p>
        <p>{{person.content | strip_html | truncate: 100 }}</p>
    </div>
</div>
<div class="h-line"></div>
{% endif %}
{% endfor %}


## Doctoral Students

{% for person in phds %}
{% assign a_url = person.url | split: "/" %}
{% if a_url.size == 4 %}
<div class="person-grid">
    <div>
        <img class="profileImage"
            onerror="this.src='/assets/images/avatar.png'"
            src="{{person.url | remove: 'index.html' }}/{{person.profileImage}}">
    </div>
    <div>
        <h4><a href="{{person.url}}">{{person.name}}</a></h4>
        <p>{{person.title}}</p>
        <p>{{person.content | strip_html | truncate: 100 }}</p>
    </div>
</div>
<div class="h-line"></div>
{% endif %}
{% endfor %}


## Past Members

{% for person in past_members %}
{% assign a_url = person.url | split: "/" %}
{% if a_url.size == 4 %}
<div class="person-grid">
    <div>
        <img class="profileImage"
            onerror="this.src='/assets/images/avatar.png'"
            src="{{person.url | remove: 'index.html' }}/{{person.profileImage}}">
    </div>
    <div>
        <h4><a href="{{person.url}}">{{person.name}}</a></h4>
        <p>{{person.title}}</p>
        <p>{{person.content | strip_html | truncate: 100 }}</p>
    </div>
</div>
<div class="h-line"></div>
{% endif %}
{% endfor %}
