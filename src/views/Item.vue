<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Item</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" :fullscreen="true">
      <div id="container">

        <div class="wrapper">
          <ion-toolbar class="ion-margin-vertical ion-padding ion-text-start">
            <b>#Referenced page</b>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/item" target="_blank">https://ionicframework.com/docs/api/item</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/item-divider" target="_blank">https://ionicframework.com/docs/api/item-divider</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/item-group" target="_blank">https://ionicframework.com/docs/api/item-group</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/item-sliding" target="_blank">https://ionicframework.com/docs/api/item-sliding</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/label" target="_blank">https://ionicframework.com/docs/api/label</a>
            <br/><br/>
            <a href="https://ionicframework.com/docs/api/note" target="_blank">https://ionicframework.com/docs/api/note</a>
          </ion-toolbar>
        </div>

        <div class="wrapper">
          <ion-title>Basic Item</ion-title>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-label>
                Multi-line text that should ellipsis when it is too long to fit on one line. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label class="ion-text-wrap">
                Multi-line text that should wrap when it is too long to fit on one line. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h1>H1 Heading</h1>
                <p>Paragraph</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>H2 Heading</h2>
                <p>Paragraph</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h3>H3 Heading</h3>
                <p>Paragraph</p>
              </ion-label>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title class="">Content Types</ion-title>
          <p>Supporting Visuals</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item>
                <ion-icon aria-hidden="true" :icon="airplane" slot="start"></ion-icon>
                <ion-label>Airplane Mode</ion-label>
              </ion-item>
              <ion-item>
                <ion-icon aria-hidden="true" :icon="wifi" slot="start"></ion-icon>
                <ion-label>Wi-Fi</ion-label>
              </ion-item>
              <ion-item>
                <ion-icon aria-hidden="true" :icon="bluetooth" slot="start"></ion-icon>
                <ion-label>Bluetooth</ion-label>
              </ion-item>
              <ion-item>
                <ion-icon aria-hidden="true" :icon="call" slot="start"></ion-icon>
                <ion-label>Cellular</ion-label>
              </ion-item>
            </ion-list>
            <ion-list>
              <ion-item>
                <ion-avatar aria-hidden="true" slot="start">
                  <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>Huey</ion-label>
              </ion-item>
              <ion-item>
                <ion-avatar aria-hidden="true" slot="start">
                  <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>Dewey</ion-label>
              </ion-item>
              <ion-item>
                <ion-avatar aria-hidden="true" slot="start">
                  <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>Louie</ion-label>
              </ion-item>
              <ion-item>
                <ion-avatar aria-hidden="true" slot="start">
                  <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </ion-avatar>
                <ion-label>Fooie</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Text</p>
          <div class="ion-margin-vertical">
            <ion-list :inset="true">
              <ion-item>
                <ion-input label="First Name"></ion-input>
              </ion-item>
              <ion-item>
                <ion-input label="Last Name"></ion-input>
              </ion-item>
              <ion-item>
                <ion-toggle>
                  <ion-label>Allow Notifications</ion-label>
                  <ion-note color="medium">Unsubscribe at any time</ion-note>
                </ion-toggle>
              </ion-item>
            </ion-list>
            <ion-list :inset="true">
              <ion-item>
                <ion-textarea label="Comments" label-placement="floating" rows="5"></ion-textarea>
              </ion-item>
            </ion-list>
            <ion-note color="medium" class="ion-margin-horizontal">
              Your comments will be kept anonymous and will only be used to improve the reliability of our products.
            </ion-note>
          </div>
        </div>

        <div class="wrapper">
          <p>Metadata</p>
          <div class="ion-margin-vertical">
            <ion-list class="Metadata" :inset="true">
              <ion-item :button="true">
                <ion-icon color="danger" slot="start" :icon="listCircle" size="large"></ion-icon>
                <ion-label>General</ion-label>
                <ion-note slot="end">6</ion-note>
              </ion-item>
              <ion-item :button="true">
                <ion-icon color="tertiary" slot="start" :icon="listCircle" size="large"></ion-icon>
                <ion-label>Shopping</ion-label>
                <ion-note slot="end">15</ion-note>
              </ion-item>
              <ion-item :button="true">
                <ion-icon color="success" slot="start" :icon="listCircle" size="large"></ion-icon>
                <ion-label>Cleaning</ion-label>
                <ion-note slot="end">3</ion-note>
              </ion-item>
              <ion-item :button="true">
                <ion-icon color="warning" slot="start" :icon="listCircle" size="large"></ion-icon>
                <ion-label>Reminders</ion-label>
                <ion-note slot="end">8</ion-note>
              </ion-item>
            </ion-list>
            <ion-list class="Metadata" :inset="true">
              <ion-item :button="true" detail="false">
                <div class="unread-indicator-wrapper" slot="start">
                  <div class="unread-indicator"></div>
                </div>
                <ion-label>
                  <strong>Rick Astley</strong>
                  <ion-text>Never Gonna Give You Up</ion-text><br />
                  <ion-note color="medium" class="ion-text-wrap">
                    Never gonna give you up Never gonna let you down Never gonna run...
                  </ion-note>
                </ion-label>
                <div class="metadata-end-wrapper" slot="end">
                  <ion-note color="medium">06:11</ion-note>
                  <ion-icon color="medium" :icon="chevronForward"></ion-icon>
                </div>
              </ion-item>
              <ion-item :button="true" detail="false">
                <div class="unread-indicator-wrapper" slot="start"></div>
                <ion-label>
                  <strong>Ionitron</strong>
                  <ion-text>I have become sentient</ion-text><br />
                  <ion-note color="medium" class="ion-text-wrap">That is all.</ion-note>
                </ion-label>
                <div class="metadata-end-wrapper" slot="end">
                  <ion-note color="medium">03:44</ion-note>
                  <ion-icon color="medium" :icon="chevronForward"></ion-icon>
                </div>
              </ion-item>
              <ion-item :button="true" detail="false">
                <div class="unread-indicator-wrapper" slot="start">
                  <div class="unread-indicator"></div>
                </div>
                <ion-label>
                  <strong>Steam</strong>
                  <ion-text>Game Store Sale</ion-text><br />
                  <ion-note color="medium" class="ion-text-wrap">
                    That game you added to your wish list 2 years ago is now on sale!
                  </ion-note>
                </ion-label>
                <div class="metadata-end-wrapper" slot="end">
                  <ion-note color="medium">Yesterday</ion-note>
                  <ion-icon color="medium" :icon="chevronForward"></ion-icon>
                </div>
              </ion-item>
              <ion-item :button="true" detail="false">
                <div class="unread-indicator-wrapper" slot="start"></div>
                <ion-label>
                  <strong>Ionic</strong>
                  <ion-text>Announcing Ionic 7.0</ion-text><br />
                  <ion-note color="medium" class="ion-text-wrap">This version is one more than Ionic 6!</ion-note>
                </ion-label>
                <div class="metadata-end-wrapper" slot="end">
                  <ion-note color="medium">Yesterday</ion-note>
                  <ion-icon color="medium" :icon="chevronForward"></ion-icon>
                </div>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Actions</p>
          <div class="ion-margin-vertical">
            <ion-list :inset="true">
              <ion-item-sliding>
                <ion-item :button="true">
                  <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label>Rick Astley</ion-label>
                </ion-item>
                <ion-item-options slot="end">
                  <ion-item-option color="warning">
                    <ion-icon slot="icon-only" :icon="pin"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" :icon="share"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger" expandable="true">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item :button="true">
                  <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label>Leeroy Jenkins</ion-label>
                </ion-item>
                <ion-item-options slot="end">
                  <ion-item-option color="warning">
                    <ion-icon slot="icon-only" :icon="pin"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" :icon="share"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger" expandable="true">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item :button="true">
                  <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label>Ionitron</ion-label>
                </ion-item>
                <ion-item-options slot="end">
                  <ion-item-option color="warning">
                    <ion-icon slot="icon-only" :icon="pin"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" :icon="share"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger" expandable="true">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item :button="true">
                  <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label>Wall-E</ion-label>
                </ion-item>
                <ion-item-options slot="end">
                  <ion-item-option color="warning">
                    <ion-icon slot="icon-only" :icon="pin"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" :icon="share"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger" expandable="true">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item :button="true">
                  <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label>Cortana</ion-label>
                </ion-item>
                <ion-item-options slot="end">
                  <ion-item-option color="warning">
                    <ion-icon slot="icon-only" :icon="pin"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" :icon="share"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger" expandable="true">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item :button="true">
                  <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label>Bender</ion-label>
                </ion-item>
                <ion-item-options slot="end">
                  <ion-item-option color="warning">
                    <ion-icon slot="icon-only" :icon="pin"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" :icon="share"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger" expandable="true">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item :button="true">
                  <ion-avatar aria-hidden="true" slot="start">
                    <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </ion-avatar>
                  <ion-label>BB-8</ion-label>
                </ion-item>
                <ion-item-options slot="end">
                  <ion-item-option color="warning">
                    <ion-icon slot="icon-only" :icon="pin"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="tertiary">
                    <ion-icon slot="icon-only" :icon="share"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger" expandable="true">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Controls</p>
          <div class="ion-margin-vertical">
            <ion-list :inset="true">
              <ion-item>
                <ion-checkbox slot="start" aria-label="Toggle task completion"></ion-checkbox>
                <ion-input aria-label="Task name" value="Get eggs"></ion-input>
              </ion-item>
              <ion-item>
                <ion-checkbox slot="start" aria-label="Toggle task completion"></ion-checkbox>
                <ion-input aria-label="Task name" value="Get milk"></ion-input>
              </ion-item>
              <ion-item>
                <ion-checkbox slot="start" aria-label="Toggle task completion"></ion-checkbox>
                <ion-input aria-label="Task name" value="Take out compost"></ion-input>
              </ion-item>
              <ion-item>
                <ion-checkbox slot="start" aria-label="Toggle task completion"></ion-checkbox>
                <ion-input aria-label="Task name" value="Pick up dry cleaning"></ion-input>
              </ion-item>
              <ion-item>
                <ion-checkbox slot="start" aria-label="Toggle task completion"></ion-checkbox>
                <ion-input aria-label="Task name" value="Call mom"></ion-input>
              </ion-item>
              <ion-item>
                <ion-checkbox slot="start" aria-label="Toggle task completion"></ion-checkbox>
                <ion-input aria-label="Task name" value="Order more dog food"></ion-input>
              </ion-item>
              <ion-item>
                <ion-checkbox slot="start" aria-label="Toggle task completion"></ion-checkbox>
                <ion-input aria-label="Task name" value="Think of new tasks for this demo"></ion-input>
              </ion-item>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Clickable Items</ion-title>
          <div class="ion-margin-vertical">
            <ion-item href="#">
              <ion-label>Anchor Item</ion-label>
            </ion-item>
            <ion-item href="#" disabled="true">
              <ion-label>Disabled Anchor Item</ion-label>
            </ion-item>
            <ion-item button>
              <ion-label>Button Item</ion-label>
            </ion-item>
            <ion-item button disabled="true">
              <ion-label>Disabled Button Item</ion-label>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Detail Arrows</ion-title>
          <div class="ion-margin-vertical">
            <ion-item detail="true">
              <ion-label>
                <h3>Text Item</h3>
                <p>Detail set to true - detail arrow displays on both modes</p>
              </ion-label>
            </ion-item>
            <ion-item button>
              <ion-label>
                <h3>Button Item</h3>
                <p>Default detail - detail arrow displays on iOS only</p>
              </ion-label>
            </ion-item>
            <ion-item button detail="true">
              <ion-label>
                <h3>Button Item</h3>
                <p>Detail set to true - detail arrow displays on both modes</p>
              </ion-label>
            </ion-item>
            <ion-item button detail="false">
              <ion-label>
                <h3>Button Item</h3>
                <p>Detail set to false - detail arrow hidden on both modes</p>
              </ion-label>
            </ion-item>
            <ion-item button detail="true" :detailIcon="caretForwardOutline">
              <ion-label>
                <h3>Button Item</h3>
                <p>Detail set to true - detail arrow displays on both modes</p>
                <p>Detail icon set to caret-forward-outline</p>
              </ion-label>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Item Lines</ion-title>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-label> Default Item Lines </ion-label>
            </ion-item>
            <ion-item lines="inset">
              <ion-label>Item Lines Inset</ion-label>
            </ion-item>
            <ion-item lines="full">
              <ion-label>Item Lines Full</ion-label>
            </ion-item>
            <ion-item lines="none">
              <ion-label>Item Lines None</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="star" slot="start"></ion-icon>
              <ion-label>Default Item Lines</ion-label>
              <ion-icon :icon="informationCircle" slot="end"></ion-icon>
            </ion-item>
            <ion-item lines="inset">
              <ion-icon :icon="star" slot="start"></ion-icon>
              <ion-label>Item Lines Inset</ion-label>
              <ion-icon :icon="informationCircle" slot="end"></ion-icon>
            </ion-item>
            <ion-item lines="full">
              <ion-icon :icon="star" slot="start"></ion-icon>
              <ion-label>Item Lines Full</ion-label>
              <ion-icon :icon="informationCircle" slot="end"></ion-icon>
            </ion-item>
            <ion-item lines="none">
              <ion-icon :icon="star" slot="start"></ion-icon>
              <ion-label>Item Lines None</ion-label>
              <ion-icon :icon="informationCircle" slot="end"></ion-icon>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Buttons in Items</ion-title>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-button slot="start"> Start </ion-button>
              <ion-label>Default Buttons</ion-label>
              <ion-button slot="end"> End </ion-button>
            </ion-item>
            <ion-item>
              <ion-button slot="start">
                Start
                <ion-icon :icon="home" slot="end"></ion-icon>
              </ion-button>
              <ion-label>Buttons with Icons</ion-label>
              <ion-button slot="end">
                <ion-icon :icon="star" slot="end"></ion-icon>
                End
              </ion-button>
            </ion-item>
            <ion-item>
              <ion-button slot="start">
                <ion-icon slot="icon-only" :icon="navigate"></ion-icon>
              </ion-button>
              <ion-label>Icon only Buttons</ion-label>
              <ion-button slot="end">
                <ion-icon slot="icon-only" :icon="star"></ion-icon>
              </ion-button>
            </ion-item>
            <ion-item>
              <ion-label>Button Sizes</ion-label>
              <ion-button slot="end" size="small"> Small </ion-button>
              <ion-button slot="end" size="default"> Default </ion-button>
              <ion-button slot="end" size="large"> Large </ion-button>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Item Inputs</ion-title>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-input label="Default Input" placeholder="Enter text"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label="Fixed Input" label-placement="fixed" placeholder="Enter text"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label="Stacked Input" label-placement="stacked" placeholder="Enter text"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label="Floating Input" label-placement="floating" placeholder="Enter text"></ion-input>
            </ion-item>
            <ion-item>
              <ion-select label="Select" placeholder="Make a Selection">
                <ion-select-option value="">No Game Console</ion-select-option>
                <ion-select-option value="nes">NES</ion-select-option>
                <ion-select-option value="n64">Nintendo64</ion-select-option>
                <ion-select-option value="ps">PlayStation</ion-select-option>
                <ion-select-option value="genesis">Sega Genesis</ion-select-option>
                <ion-select-option value="saturn">Sega Saturn</ion-select-option>
                <ion-select-option value="snes">SNES</ion-select-option>
              </ion-select>
            </ion-item>
            <ion-item>
              <ion-toggle> Toggle </ion-toggle>
            </ion-item>
            <ion-item>
              <ion-checkbox> Checkbox </ion-checkbox>
            </ion-item>
            <ion-item>
              <ion-range label-placement="start">
                <div slot="label">Range</div>
              </ion-range>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-label>Default Item</ion-label>
            </ion-item>
            <ion-item color="primary">
              <ion-label>Primary Item</ion-label>
            </ion-item>
            <ion-item color="secondary">
              <ion-label>Secondary Item</ion-label>
            </ion-item>
            <ion-item color="tertiary">
              <ion-label>Tertiary Item</ion-label>
            </ion-item>
            <ion-item color="success">
              <ion-label>Success Item</ion-label>
            </ion-item>
            <ion-item color="warning">
              <ion-label>Warning Item</ion-label>
            </ion-item>
            <ion-item color="danger">
              <ion-label>Danger Item</ion-label>
            </ion-item>
            <ion-item color="light">
              <ion-label>Light Item</ion-label>
            </ion-item>
            <ion-item color="medium">
              <ion-label>Medium Item</ion-label>
            </ion-item>
            <ion-item color="dark">
              <ion-label>Dark Item</ion-label>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Shadow Parts</p>
          <div class="ion-margin-vertical">
            <ion-item class="ShadowParts" button detail lines="full">
              <ion-label>Custom Item</ion-label>
            </ion-item>
            <ion-item class="ShadowParts" button detail lines="full">
              <ion-label>Custom Item</ion-label>
            </ion-item>
            <ion-item class="ShadowParts" button detail lines="full">
              <ion-label>Custom Item</ion-label>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <p>CSS Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-item class="CustomProperties" button detail lines="full">
              <ion-label>Custom Item</ion-label>
            </ion-item>
            <ion-item class="CustomProperties" button detail lines="full">
              <ion-label>Custom Item</ion-label>
            </ion-item>
            <ion-item class="CustomProperties" button detail lines="full">
              <ion-label>Custom Item</ion-label>
            </ion-item>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-item-divider</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item-group>
                <ion-item-divider>
                  <ion-label> Section A </ion-label>
                </ion-item-divider>
                <ion-item>
                  <ion-label>A1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>A2</ion-label>
                </ion-item>
                <ion-item lines="none">
                  <ion-label>A3</ion-label>
                </ion-item>
              </ion-item-group>
              <ion-item-group>
                <ion-item-divider>
                  <ion-label> Section B </ion-label>
                </ion-item-divider>
                <ion-item>
                  <ion-label>B1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>B2</ion-label>
                </ion-item>
                <ion-item lines="none">
                  <ion-label>B3</ion-label>
                </ion-item>
              </ion-item-group>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <p style="text-align: center;">- same grammar with ion-item -​</p>
          <div class="ion-margin-vertical">
            <ion-item-divider>
              <ion-label>Default</ion-label>
            </ion-item-divider>
            <ion-item-divider color="primary">
              <ion-label>Primary</ion-label>
            </ion-item-divider>
            <ion-item-divider color="secondary">
              <ion-label>Secondary</ion-label>
            </ion-item-divider>
            <ion-item-divider color="tertiary">
              <ion-label>Tertiary</ion-label>
            </ion-item-divider>
            <ion-item-divider color="success">
              <ion-label>Success</ion-label>
            </ion-item-divider>
            <ion-item-divider color="warning">
              <ion-label>Warning</ion-label>
            </ion-item-divider>
            <ion-item-divider color="danger">
              <ion-label>Danger</ion-label>
            </ion-item-divider>
            <ion-item-divider color="light">
              <ion-label>Light</ion-label>
            </ion-item-divider>
            <ion-item-divider color="medium">
              <ion-label>Medium</ion-label>
            </ion-item-divider>
            <ion-item-divider color="dark">
              <ion-label>Dark</ion-label>
            </ion-item-divider>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>CSS Custom Properties</p>
          <p style="text-align: center;">- same grammar with ion-item -​</p>
          <div class="ion-margin-vertical">
            <ion-item-divider class="CustomProperties">
              <ion-label> Item Divider </ion-label>
            </ion-item-divider>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-item-group</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-item-group>
              <ion-item-divider>
                <ion-label>A</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Angola</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Argentina</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Armenia</ion-label>
              </ion-item>
            </ion-item-group>
            <ion-item-group>
              <ion-item-divider>
                <ion-label>B</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Bangladesh</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Belarus</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-label>Belgium</ion-label>
              </ion-item>
            </ion-item-group>
          </div>
        </div>

        <div class="wrapper">
          <p>Sliding Items</p>
          <p style="text-align: center;">- same grammar with ion-item -​</p>
          <div class="ion-margin-vertical">
            <ion-item-group>
              <ion-item-divider>
                <ion-label> Fruits </ion-label>
              </ion-item-divider>
              <ion-item-sliding>
                <ion-item>
                  <ion-label> Grapes </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option> Favorite </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item>
                  <ion-label> Apples </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option> Favorite </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item lines="none">
                  <ion-label> Bananas </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option> Favorite </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-item-group>
            <ion-item-group>
              <ion-item-divider>
                <ion-label> Vegetables </ion-label>
              </ion-item-divider>
              <ion-item-sliding>
                <ion-item>
                  <ion-label> Carrots </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option> Favorite </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item>
                  <ion-label> Broccoli </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option> Favorite </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item lines="none">
                  <ion-label> Celery </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option> Favorite </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-item-group>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-item-sliding</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item-sliding>
                <ion-item>
                  <ion-label>Sliding Item with End Options</ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option>Favorite</ion-item-option>
                  <ion-item-option color="danger">Delete</ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success">Archive</ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label>Sliding Item with Start Options</ion-label>
                </ion-item>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success">Archive</ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label>Sliding Item with Options on Both Sides</ion-label>
                </ion-item>
                <ion-item-options side="end">
                  <ion-item-option>Favorite</ion-item-option>
                  <ion-item-option color="danger">Delete</ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Icon Options</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success">
                    <ion-icon slot="icon-only" :icon="archive"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label>Sliding Item with Icons Only</ion-label>
                </ion-item>
                <ion-item-options side="end">
                  <ion-item-option>
                    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
                  </ion-item-option>
                  <ion-item-option color="danger">
                    <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success">
                    <ion-icon slot="start" :icon="archive"></ion-icon>
                    Archive
                  </ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label> Sliding Item with Start Icons </ion-label>
                </ion-item>
                <ion-item-options side="end">
                  <ion-item-option>
                    <ion-icon slot="start" :icon="heart"></ion-icon>
                    Favorite
                  </ion-item-option>
                  <ion-item-option color="danger">
                    <ion-icon slot="start" :icon="trash"></ion-icon>
                    Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success">
                    <ion-icon slot="end" :icon="archive"></ion-icon>
                    Archive
                  </ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label> Sliding Item with End Icons </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option>
                    <ion-icon slot="end" :icon="heart"></ion-icon>
                    Favorite
                  </ion-item-option>
                  <ion-item-option color="danger">
                    <ion-icon slot="end" :icon="trash"></ion-icon>
                    Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success">
                    <ion-icon slot="top" :icon="archive"></ion-icon>
                    Archive
                  </ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label> Sliding Item with Top Icons </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option>
                    <ion-icon slot="top" :icon="heart"></ion-icon>
                    Favorite
                  </ion-item-option>
                  <ion-item-option color="danger">
                    <ion-icon slot="top" :icon="trash"></ion-icon>
                    Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success">
                    <ion-icon slot="bottom" :icon="archive"></ion-icon>
                    Archive
                  </ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label> Sliding Item with Bottom Icons </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option>
                    <ion-icon slot="bottom" :icon="heart"></ion-icon>
                    Favorite
                  </ion-item-option>
                  <ion-item-option color="danger">
                    <ion-icon slot="bottom" :icon="trash"></ion-icon>
                    Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-list>
          </div>
        </div>

        <div class="wrapper">
          <p>Expandable Options</p>
          <div class="ion-margin-vertical">
            <ion-list>
              <ion-item-sliding>
                <ion-item-options side="start">
                  <ion-item-option color="success" expandable>Archive</ion-item-option>
                </ion-item-options>
                <ion-item>
                  <ion-label>Sliding Item with Expandable Options</ion-label>
                </ion-item>
                <ion-item-options side="end">
                  <ion-item-option>Favorite</ion-item-option>
                  <ion-item-option color="danger" expandable>Delete</ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-list>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-label</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-label>Label</ion-label>
          </div>
        </div>

        <div class="wrapper">
          <p>Item Labels</p>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-label>Default Label</ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                Multi-line text that should ellipsis when it is too long to fit on one line. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label class="ion-text-wrap">
                Multi-line text that should wrap when it is too long to fit on one line. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h1>Heading</h1>
                <p>Paragraph</p>
              </ion-label>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-label>Default</ion-label>
            <ion-label color="primary">Primary</ion-label>
            <ion-label color="secondary">Secondary</ion-label>
            <ion-label color="tertiary">Tertiary</ion-label>
            <ion-label color="success">Success</ion-label>
            <ion-label color="warning">Warning</ion-label>
            <ion-label color="danger">Danger</ion-label>
            <ion-label color="light">Light</ion-label>
            <ion-label color="medium">Medium</ion-label>
            <ion-label color="dark">Dark</ion-label>
          </div>
        </div>

<hr>

        <div class="wrapper">
          <ion-title>ion-note</ion-title>
          <p>Basic Usage</p>
          <div class="ion-margin-vertical">
            <ion-note>Default Note</ion-note>
          </div>
        </div>

        <div class="wrapper">
          <p>Item Notes</p>
          <div class="ion-margin-vertical">
            <ion-item>
              <ion-label>Label</ion-label>
              <ion-note slot="end">Note (End)</ion-note>
            </ion-item>
            <ion-item>
              <ion-note slot="start">Note (Start)</ion-note>
              <ion-label>Label</ion-label>
            </ion-item>
          </div>
        </div>

        <div class="wrapper">
          <ion-title>Theming</ion-title>
          <p>Colors</p>
          <div class="ion-margin-vertical">
            <ion-note>Default Note</ion-note>
            <ion-note color="primary">Primary Note</ion-note>
            <ion-note color="secondary">Secondary Note</ion-note>
            <ion-note color="tertiary">Tertiary Note</ion-note>
            <ion-note color="success">Success Note</ion-note>
            <ion-note color="warning">Warning Note</ion-note>
            <ion-note color="danger">Danger Note</ion-note>
            <ion-note color="light">Light Note</ion-note>
            <ion-note color="medium">Medium Note</ion-note>
            <ion-note color="dark">Dark Note</ion-note>
          </div>
        </div>

        <div class="wrapper">
          <p>Custom Properties</p>
          <div class="ion-margin-vertical">
            <ion-note class="CustomProperties">Default Note</ion-note>
          </div>
        </div>


      </div>
    </ion-content>

    <ion-footer :translucent="true">
      <ion-toolbar>
        <ion-title>ionic x Vue.js Components-master</ion-title>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>


<script setup lang="ts">
  import { IonItem, IonLabel,  IonAvatar, IonThumbnail, IonCheckbox, IonInput, IonRange, IonSelect, IonSelectOption, IonToggle, IonItemDivider, IonItemGroup, IonItemSliding, IonNote } from '@ionic/vue';
  import { caretForwardOutline, informationCircle, home, navigate, star, archive, heart, trash} from 'ionicons/icons';
  import { airplane, bluetooth, call, wifi } from 'ionicons/icons';
  import { chevronForward, listCircle } from 'ionicons/icons';
  import { pin, share } from 'ionicons/icons';

</script>


<style scoped>

  .unread-indicator-wrapper {
    width: auto;
  }
  .unread-indicator {
    background: var(--ion-color-primary);
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    inset-inline-start: 12px;
    top: 12px;
  }
  .metadata-end-wrapper {
    width: auto;
    position: absolute;
    top: 10px;
    inset-inline-end: 10px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
  .Metadata ion-label strong {
    display: block;
    max-width: calc(100% - 60px);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .Metadata ion-label ion-note {
    font-size: 0.9rem;
  }


/*  */

  ion-item.ShadowParts::part(native) {
    background: #19422d;
    color: #fff;
    border-color: #fff;
    border-style: dashed;
    border-width: 2px;
    border-radius: 20px;
  }
  ion-item.ShadowParts::part(detail-icon) {
    color: white;
    opacity: 1;
    font-size: 20px;
  }


/*  */
  ion-item.CustomProperties {
    --background: #3739af;
    --color: #fff;
    --border-color: #fff;
    --border-style: dashed;
    --border-width: 2px;
    --border-radius: 20px;
    --ripple-color: rgb(139, 25, 40);
    --detail-icon-color: white;
    --detail-icon-opacity: 1;
    --detail-icon-font-size: 20px;
  }

/*  */
    ion-item.Highlight {
    --highlight-height: 2px;
    --highlight-color-focused: #43e7f3;
    --highlight-color-valid: #6f58d8;
    --highlight-color-invalid: #ff46be;
  }




/*  */
  ion-item-divider.CustomProperties {
    --background: #19422d;
    --color: #fff;
    --padding-top: 10px;
    --padding-bottom: 10px;
    --padding-start: 20px;
    --padding-end: 20px;
  }


/*  */
  ion-note.CustomProperties {
    --color: #54dc98;
  }



</style>

