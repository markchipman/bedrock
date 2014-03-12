To: {{email}}
From: "{{serviceName}} Customer Support" <support@{{supportDomain}}>
Subject: {{identitySubjectPrefix}}Your {{serviceName}} passcode

{% if usage === "reset" -%}
You requested a passcode so you could reset your {{serviceName}} password.
If you did not make this request, simply ignore this email and your password
will not be changed.
{%- else -%}
You requested a passcode so you could verify your {{serviceName}} email
address.
{%- endif %}

You may visit the following page and enter your code manually:

https://{{serviceHost}}/session/passcode

{%- if identities.length == 1 %}

Your passcode is: {{identities[0].sysPasscode}}
{% else -%}

Since you have multiple identities with the same email address, we sent you
passcodes for each one:
{% for identity in identities -%}
{%- if identity %}
Identity: {{identity.label}}
{%- endif -%}
Passcode: {{identity.sysPasscode}}
{%- endfor -%}
{%- endif %}
If you have any questions or comments please contact support@{{supportDomain}}.
